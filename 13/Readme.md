#### Next useFormState

- https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations#error-handling

- 점진적으로 App Router를 도입하고 폼 제출 및 데이터 변형을 처리하기 위해 서버 액션(Server Actions)을 사용하는 것을 곧 권장할 것입니다. 서버 액션은 컴포넌트에서 직접 호출할 수 있는 비동기 서버 함수를 정의할 수 있게 하여, 별도로 API 라우트를 수동으로 생성할 필요가 없게 합니다.
- API 라우트는 CORS 헤더를 지정하지 않기 때문에 기본적으로 동일 출처(same-origin)만 허용됩니다.
- API 라우트는 서버에서 실행되므로 클라이언트에 노출되지 않는 환경 변수(Environment Variables)를 통해 API 키와 같은 민감한 값을 사용할 수 있습니다. 이는 애플리케이션의 보안을 위해 매우 중요합니다.

        const ref = useRef<HTMLFormElement>(null);
        const [state, formAction] = useFormState(insertMongoDB, {
        success: false,
        message: "",
        });

        return (
        <>
        <form action={formAction} ref={ref} className="flex gap-2">
        <Input type="text" name="todo" placeholder="Enter Your Todo" />
        <Button type="submit" style={"w-[77px] bg-[#4F4F4F] text-white"}>
        Add
        </Button>
        </form>
        <div>
        {state !== null && (
        <h1
        className={`${state.success && "text-blue-500"} ${
                    !state.success && "text-rose-500"
                    }`} >
        {state.message}
        </h1>
        )}
        </div>

        - export async function insertMongoDB(prevState: TPrevState, formdata: FormData) {

  connectDB();
  const todo = formdata.get("todo");
  if (todo === "") {
  return { success: false, message: "Please fill in the form." };
  }
  const newTodo = new Todos({ todo, toggle: false });

  newTodo.save();
  return { success: false, message: "todo add Success" };
  }

#### Next Auth

     - action.ts
     "use server";

    import { hash } from "bcryptjs";
    import { connectDB } from "./db";
    import User from "./schema";
    import { redirect } from "next/navigation";
    import { signIn } from "@/auth";
    // import { signIn } from "next-auth/react";

    // 회원가입
    export async function register(formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    if (!name || !email || !password) {
    console.log("입력값이 부족합니다.");
    }

    connectDB();

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
    console.log("이미 가입된 회원입니다.");
    }

    // 없는 회원이면 DB넣기
    const hashPassword = await hash(String(password), 10);
    const user = new User({
    name,
    email,
    password: hashPassword,
    });
    await user.save();
    redirect("/login");
    }

    // 로그인
    export async function login(formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");
    if (!email || !password) {
    console.log("입력값이 부족합니다.");
    }
    try {
    // connectDB();
    console.log("----------email-----", email);
    console.log("----------password-----", password);
    await signIn("credentials", {
    redirect: false,
    callbackUrl: "/",
    email,
    password,
    }); //@auth provider로 signIn 메소드 호출
    } catch (error) {
    console.log(error, "error");
    }
    }

---

        - db.ts
        import moongoose from "mongoose";

        export const connectDB = async () => {
        try {
        console.log(moongoose.connection.readyState);
        if (moongoose.connection.readyState) return;
        const coon = await moongoose.connect(process.env.MONGODB_URL as string);
        console.log(`mongoDB connected ${coon.connection.host}`);
        } catch (e) {
        console.log("error connected", e);
        process.exit();
        }
        };

        export default connectDB;

---

    - schema.ts
    import mongoose from "mongoose";

    const userSchema = new mongoose.Schema(
    {
    name: {
    type: String,
    required: true,
    },
    email: {
    type: String,
    required: true,
    },
    password: {
    type: String,
    select: false,
    },
    role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
    },
    // image: {
    // tpye: String,
    // },
    authProviderId: { type: String }, //소셜 로그인을 위한 id
    },

    { timestamps: true }
    );

    const User = mongoose?.models?.User || mongoose.model("User", userSchema);

    export default User;

---

    - auth.ts
    import NextAuth, { CredentialsSignin } from "next-auth";
    import credentials from "next-auth/providers/credentials";
    import connectDB from "./lib/db";
    import User from "./lib/schema";
    import { compare } from "bcryptjs";

        export const { handlers, signIn, signOut, auth } = NextAuth({
        providers: [
        credentials({
        name: "credentials",
        credentials: {
        email: { label: "Eamil" },
        password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
        console.log(credentials, "credentials");
        const { email, password } = credentials;
        if (!email || !password) {
        throw new CredentialsSignin("입력값이 부족합니다.");
        }
        connectDB();
        const user = await User.findOne({ email }).select("password +role");
        // mongoDB에서 select 메소드를 통해 password 와 role 값 가져오가
        if (!user) {
        throw new CredentialsSignin("존재하지 않는 회원입니다.");
        }
        // 사용자가 입력한 비밀번호와 데이터 베이스의 비밀번호와 일치하는지 확인
        // bcryptjs에서 compare 메소드로 확인 (데이터베이스에 비밀번호는 암호화되어 들어감)
        const isMatched = await compare(String(password), user.password);
        if (!isMatched) {
        throw new CredentialsSignin("비밀번호가 일치하지 않습니다.");
        }
        const { name, role, _id } = user;
        return {
        name,
        email: user.email,
        role,
        id: _id,
        };
        },
        }),
        ],
        });
