import React from "react";
import Title from "../components/common/Title";
import LoginForm from "../components/login/LoginForm";

const Login = () => {
  return (
    <section className="flex bg-background py-[103px]">
      <div className="relative">
        <img className="w-[720px] h-[700px]" src="/bg-login.png" />
        <div className="absolute top-[200px] left-[100px] ">
          <span className="font-semibold text-7xl text-primary">
            Contest-mate
          </span>
          <p className="flex justify-end mt-10">팀원이 필요하신가요?</p>
          <p className="flex justify-end ">자신과 맞는 팀원을 구하세요.</p>
        </div>
      </div>
      <div className="z-50 flex flex-col flex-1 p-20 mr-5 bg-white border gap-14 rounded-xl">
        <span className="text-5xl font-semibold text-primary">Login</span>
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
