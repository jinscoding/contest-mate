import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
const LoginForm = () => {
  const googleSocialLogin = useGoogleLogin({
    scope: "email profile",
    onSuccess: async ({ code }) => {
      axios.post("", { code }).then(({ data }) => {
        console.log(data);
      });
    },
    onError: (errorResponse) => {
      console.error(errorResponse);
    },
    flow: "auth-code",
  });

  return (
    <form className="w-full">
      <div className="flex flex-col items-center justify-center gap-8 mt-10 px-14">
        <button
          type="button"
          onClick={() => {}}
          className="flex bg-kakao rounded-[12px] w-full h-12 justify-center items-center cursor-pointer"
        >
          <img className="ml-5" src="/icon-kakaoSymbol.png" />
        </button>

        <button
          type="button"
          className="flex bg-white border rounded-[12px] w-full h-12 justify-center items-center cursor-pointer"
          onClick={googleSocialLogin}
        >
          <img className="w-4 h-4 mr-5" src="/icon-googleSymbol.png" />
          <p className="text-[14px] ml-5">구글 로그인</p>
        </button>

        <button className="flex bg-naver rounded-[12px] w-full h-12 justify-center items-center cursor-pointer">
          <img className="w-4 h-4 mr-5" src="/icon-naverSymbol.png" />
          <p className="text-[14px] ml-5 text-white">네이버 로그인</p>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
