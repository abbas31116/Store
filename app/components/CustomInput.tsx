import type { HTMLAttributes, InputHTMLAttributes } from "react";

interface ICustominput extends InputHTMLAttributes<HTMLInputElement> {
  placeHolder: string;
  title: string;
  errorMsg?: string;
}
function CustomInput({ placeHolder, errorMsg, title, ...props }: ICustominput) {
  return (
    <div>
      <label className="block mb-1">{title}</label>
      <input
        type="text"
        placeholder={placeHolder}
        className={"border-2 border-gray-300 rounded-md w-80 p-2 mb-3"}
        {...props}
      />
      {errorMsg && (
        <label className="text-red-500 font-bold block m-2">{errorMsg}</label>
      )}
    </div>
  );
}



export {CustomInput}