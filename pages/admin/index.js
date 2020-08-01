import Head from "next/head";
import Link from "next/link";
import { getAllProjects } from "../../lib/graphcms";
const AdminManagement = ({ projects }) => {
  return (
    <div className="">
      <Head>
        <title>Julia Calabria</title>
        <meta name="Julia Calabria - Portfolio"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="hero" className="container pb-3">
        <div className="container mx-auto px-5">
          <Link href="/">
            <a>
              <p className="text-6xl pt-20 md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
                Admin console.
              </p>
            </a>
          </Link>
        </div>
      </section>
      <section className="container mx-auto mt-10">
        <button className="text-md bg-green-400 p-2 rounded shadow-md font-bold">
          <i className="text-xs fa fa-plus"></i>
          <p className="text-sm inline"> Create new</p>
        </button>
        <table className="table-auto mt-10">
          <thead>
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Link</th>
              <th className="px-4 py-2">
                <i className="fa fa-edit"></i>
              </th>
              <th className="px-4 py-2">
                <i className="fa fa-trash"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id}>
                <td className="border px-4 py-2">{p.title}</td>
                <td className="border px-4 py-2">{p.description}</td>
                <td className="border px-4 py-2">
                  <img src={p.image?.url} className="mw-1/2"></img>
                </td>
                <td className="border px-4 py-2">{p.link}</td>
                <td className="border px-4 py-2">
                  <button className="text-sm bg-blue-300 py-1 px-2 rounded shadow-md">
                    <i className="fa fa-edit"></i>
                  </button>
                </td>
                <td className="border px-4 py-2">
                  <button className="text-sm bg-red-500 py-1 px-2 rounded shadow-md">
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  const projects = (await getAllProjects()) || [];
  return {
    props: { projects },
  };
}

export default AdminManagement;
