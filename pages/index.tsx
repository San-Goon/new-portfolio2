import {services} from "../data"
import {GetServerSidePropsContext} from "next";

const index = ({services}) => {
    console.log(services);
  return (
      <div>
        <h1>Hello World!</h1>
      </div>
  )
}

export default index;

export const getServerSideProps = async (context:GetServerSidePropsContext) => {
    const res = await fetch("http://localhost:3000/api/service")
    const data = await res.json()

    return {
        props: {
            services: data.services,
        }
    }
}
