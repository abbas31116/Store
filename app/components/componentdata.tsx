import { useFormik } from "formik";
import CustomButton1 from "./CustomButton";
import { CustomInput } from "./CustomInput";
interface IData {
  onclick1: () => void;
  id: number;
  index: number;
  place: string;
}
export default function CustomData({ id, index, onclick1, place }: IData) {
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit(values, formikHelpers) {},
  });
  return (
    <div key={index} className="flex items-center gap-2">
      <form onSubmit={formik.handleSubmit}>
        {/* <CustomInput placeHolder={place} title={"update title"} name="title" type="text" onChange={formik.handleChange} value={formik.values.title}/> */}
        <CustomButton1 title="delete" onClick={onclick1} type="submit" />
        <p>{id}</p>
      </form>
    </div>
  );
}
