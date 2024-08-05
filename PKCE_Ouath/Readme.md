<h2>PKCE FLOW, Oauth 2.1</h2>
<h3>참고 링크</h3>

- [Supabase PKCE Flow](https://supabase.com/docs/guides/auth/sessions/pkce-flow)
- [OAuth 2.1](https://oauth.net/2.1/)
- [Differences Between OAuth 2.0 and OAuth 2.1 by Dan Moore](https://fusionauth.io/articles/oauth/differences-between-oauth-2-oauth-2-1)

- [참고 블로그- PKCE, Oauth 2.1 ](https://medium.com/@itsinil/oauth-2-1-pkce-%EB%B0%A9%EC%8B%9D-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-14500950cdbf)

## OAuth 2.0

애플리케이션이 사용자의 자격 증명을 직접 취급하지 않고도 타사 서비스에 접근할 수 있게 해주는 기능

- **인증 흐름**:

  - **Authorization Code Grant**: 사용자와 애플리케이션 간의 상호작용을 통해 권한 부여 코드를 얻고 이를 통해 액세스 토큰을 획득합니다.
  - **Implicit Grant**: 주로 클라이언트 측 애플리케이션에서 사용되며, 권한 부여 코드 없이 직접 액세스 토큰을 얻습니다.
  - **Resource Owner Password Credentials Grant**: 사용자의 사용자 이름과 비밀번호를 사용하여 직접 액세스 토큰을 얻습니다.
  - **Client Credentials Grant**: 클라이언트 애플리케이션 자체의 자격 증명을 사용하여 액세스 토큰을 얻습니다.

- **주요 특징**:
  - **Bearer Token**: 액세스 토큰은 Bearer 토큰으로, 소유자가 해당 토큰을 사용하여 보호된 리소스에 접근할 수 있습니다.
  - **확장 가능성**: 다양한 확장 사양을 통해 기능을 추가하거나 수정할 수 있습니다.

## OAuth 2.1

OAuth 2.1은 OAuth 2.0의 후속 버전으로, 여러 확장과 수정 사항을 통합하여 보안을 강화하고 사양을 단순화하려는 목적을 가지고 있다.

- **PKCE 필수**:

  - 모든 OAuth 클라이언트가 인증 코드 흐름을 사용할 때 PKCE(Proof Key for Code Exchange)를 사용해야 합니다. 이는 인증 코드 도난을 방지하기 위한 추가 보안 단계입니다.

- **리디렉트 URI 비교**:

  - 리디렉트 URI는 정확한 문자열 일치로 비교해야 합니다. 이는 리디렉트 URI의 보안 취약점을 줄이기 위함입니다.

- **암시적 승인 생략**:

  - 암시적 승인(Implicit Grant, `response_type=token`)이 사양에서 생략되었습니다.
    - 토큰 노출:
      암시적 승인은 액세스 토큰을 URL의 해시 프래그먼트(fragment)로 전달합니다. 이는 브라우저의 주소 표시줄에 노출될 수 있으며, 다른 스크립트나 브라우저 확장 프로그램에 의해 쉽게 접근될 수 있습니다.
    - 토큰 저장 문제:
      액세스 토큰이 클라이언트 측 애플리케이션에 의해 관리되기 때문에, 토큰이 로컬 스토리지나 세션 스토리지에 저장될 수 있습니다. 이는 악성 스크립트가 해당 스토리지에 접근하여 토큰을 탈취할 위험이 있습니다.
    - 짧은 수명:
      암시적 승인 방식은 토큰의 수명이 매우 짧게 설정되므로, 자주 재인증을 해야 하는 불편함이 있습니다.

- **자원 소유자 비밀번호 자격 증명 승인 생략**:

  - 자원 소유자 비밀번호 자격 증명(Resource Owner Password Credentials Grant) 승인 방식이 사양에서 생략되었습니다. 이 방법은 사용자의 자격 증명을 애플리케이션이 직접 다루는 방식으로, OAuth의 기본 개념과 맞지 않습니다.

- **베어러 토큰 사용 금지**:

  - URI의 쿼리 문자열에 베어러 토큰을 사용하는 것이 금지됩니다. 토큰이 URL을 통해 쉽게 노출될 수 있기 때문입니다.

- **리프레시 토큰 제한**:
  - 공개 클라이언트의 리프레시 토큰은 일회용이거나 송신자 제약(sender-constrained)이어야 합니다. 이는 리프레시 토큰이 도난당했을 때 발생할 수 있는 보안 문제를 방지하기 위함입니다.

## PKCE FLOW

PKCE (Proof Key for Code Exchange)는 Authorization Code 흐름의 보안을 강화하기 위한 확장 기능입니다. PKCE는 악의적인 공격자가 인증 코드를 가로채어 악용하지 못하도록 추가적인 단계를 도입합니다. 특히, PKCE는 모바일 앱이나 싱글 페이지 웹 애플리케이션과 같은 공개 클라이언트에서 유용합니다.

## PKCE 흐름의 주요 단계

1. **코드 챌린지 생성**:

   - 클라이언트는 랜덤하게 생성된 코드 베이스(code verifier)를 SHA-256 해시 알고리즘으로 해시하여 코드 챌린지(code challenge)를 생성합니다.
   - 코드 챌린지와 해시 방법(예: "S256")을 포함하여 인증 요청을 보냅니다.

2. **인증 코드 요청**:

   - 사용자가 클라이언트 애플리케이션에 로그인하고 승인하면, 인증 서버는 인증 코드를 클라이언트에 반환합니다.

3. **코드 검증**:
   - 클라이언트는 인증 서버에 다시 요청을 보내어 인증 코드를 액세스 토큰으로 교환합니다. 이 요청에는 원래의 코드 베이스가 포함됩니다.
   - 인증 서버는 클라이언트가 보낸 코드 베이스를 다시 해시하고 초기 코드 챌린지와 비교하여 일치하면 액세스 토큰을 발급합니다.

## 클라이언트 인증 대체가 아닌 PKCE

PKCE는 클라이언트 인증의 한 형태가 아니며,클라이언트 비밀(client secret) 또는 다른 클라이언트 인증 방법의 대체물이 아닙니다.인증 코드를 훔쳐가는 공격을 막기 위한 것이지 클라이언트가 자신이 누구인지를 증명하는 방법은 아니다.
클라이언트 인증은 애플리케이션이 인증 서버에 자신이 신뢰할 수 있는 애플리케이션임을 증명하는 과정입니다. 이를 위해 클라이언트는 클라이언트 비밀(client secret) 또는 다른 인증 방법을 사용하게되는데. PKCE는 이 과정에 추가된 보안 절차일 뿐, 클라이언트가 신뢰할 수 있음을 증명하는 것은 아님!. PKCE는 클라이언트 비밀이나 private_key_jwt와 같은 다른 클라이언트 인증 방법을 사용하는 경우에도 권장된다.

## PKCE가 공격을 방지할 수 있는 이유는?

- code_challenge 전송: 클라이언트는 인증 요청(/authorize)을 보낼 때 code_challenge를 인증 서버에 전송합니다. 이 단계에서 code_challenge는 공개될 수 있으며, 이것 자체로는 보안 위험을 초래하지 않는다

- Callback code 시 : 사용자가 인증을 완료하면, Authorization Server는 클라이언트에게 code를 반환합니다. 이 코드는 일반적으로 리다이렉션을 통해 클라이언트에게 전달되며, 이 과정에서 공격자가 인증 코드를 가로챌 가능성이 있습니다.
- code_verifier의 역할: 공격자가 code를 가로챘다고 해도, code_verifier가 없다면 액세스 토큰을 얻을 수 없습니다.
- code_verifier는 클라이언트가 보유하고 있으며, /token 요청 시에만 인증 서버에 전송됩니다. 이 단계에서 code_verifier는 암호화되거나 보호되는 채널을 통해 전송되므로, 공격자가 이를 가로채기는 매우 어렵습니다.

## Supabase에서 비밀번호 찾기 기능

팀 프로젝트에서 Supabase를 사용해서 비밀번호 찾기 기능을 구현하다 Supabase에서는 PKCE Flow를 사용한다는 내용을 보게되었다(Supabase는 Oauth 2.0을 사용함?).
사용자가 비밀번호 찾기 기능을 이용할 때, 가입한 이메일 주소로 비밀번호 초기화 페이지로 리다이렉트되는 링크를 전송된다.<br> 이 링크에는 일회성 토큰이 URL의 쿼리 문자열에 포함되며 토큰을 통해 Supabase에서 사용자의 세션을 부여한다.

-     const { data: resetPasswordData, error: resetError } =
      await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: redirectToUpdatePw,
      });
-     ({ data: sessionData, error: sessionError } =
         await supabase.auth.exchangeCodeForSession(token));

  1. **일회성 토큰**:

  - 비밀번호 초기화 토큰은 일회성으로 사용되며, 사용 후 즉시 무효화됩니다. 이는 토큰이 노출되더라도 재사용할 수 없다.

  2. **짧은 유효 기간**:

  - 비밀번호 초기화 토큰은 짧은 유효 기간을 가집니다. 이는 토큰이 노출되더라도 사용 가능한 시간이 제한되도록 한다.

  3. **보호된 채널을 통한 토큰 전송**:

  - Supabase는 비밀번호 초기화 과정에서 중요한 정보를 보호된 채널(예: HTTPS)을 통해 전송합니다. 이는 공격자가 중간에서 정보를 가로채기 어렵게 한다.
