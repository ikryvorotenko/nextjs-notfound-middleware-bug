import {GetStaticProps} from "next";
import assert from "assert";
import {useRouter} from "next/router";

export const getStaticProps: GetStaticProps = async ({params}) => {
  const id = params?.id as string

  if (id === '0') {
    return {notFound: true}
  }

  return {props: {id}}
}

export async function getStaticPaths() {
  return {paths: [], fallback: true}
}

export default (params: { id: string }) => {
  //fallback
  const {isFallback} = useRouter()
  if (isFallback) {
    return <div>loading...</div>
  }

  assert(params.id, 'params.id is missing' + JSON.stringify(params))
  return <div>{params.id}</div>
}