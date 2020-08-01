import { getAllProjects } from "../../lib/graphcms";
import Head from "next/head";
import Project from "../../components/Project";
import Link from "next/link";

const Projects = ({ projects }) => {
  return (
    <div className="">
      <Head>
        <title>Julia Calabria</title>
        <meta name="Julia Calabria - Portfolio"></meta>
        <meta
          name="google-site-verification"
          content="WYqXbVn_we0RKjGpbwsBq24Nj8ydYJ1nc2PY1aQlAi8"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="hero" className="container pb-3">
        <div className="container mx-auto px-5">
          <Link href="/">
            <a>
              <p className="text-6xl pt-20 md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
                Projects.
              </p>
            </a>
          </Link>
        </div>
      </section>
      <section className="px-12 py-12">
        <div className="grid md:grid-cols-4 sm: grid-cols-1 md:gap-6 sm: row-gap-12">
          {projects.map((p) => (
            <Project key={p.id} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default Projects;

export async function getStaticProps() {
  const projects = (await getAllProjects()) || [];

  return {
    props: { projects },
  };
}
