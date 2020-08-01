import Head from "next/head";
import { getSomeProjects } from "../lib/graphcms";
import Project from "../components/Project";
export default function Home({ projects }) {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Julia Calabria</title>
        <meta name="Julia Calabria - Portfolio"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="hero" className="min-h-screen">
        <div className="container mx-auto px-5">
          <h1 className="text-6xl pt-20 md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            Hi, I'm Julia Calabria.
          </h1>
        </div>

        <section>
          <div className="md:mx-20 sm: mx-auto my-8 mb-8 md:mb-16 max-w-md">
            <div className="mx-5 sm: mx-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                feugiat mi sed commodo sagittis. Nunc interdum a quam eu
                scelerisque. Mauris ac porttitor libero. Etiam tristique
                ultricies ligula sed auctor. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Aliquam erat volutpat. Maecenas
                venenatis tristique fringilla. Suspendisse tempus congue nisl,
                pretium tristique nunc molestie non. Suspendisse potenti. Mauris
                eu diam vitae lacus facilisis eleifend a vel mauris. Morbi in
                sapien et mi condimentum eleifend sed sed tortor. Nulla aliquet
                ligula nibh, vitae placerat tortor volutpat tincidunt.
              </p>
            </div>
          </div>
        </section>
        <section id="links">
          <div className="flex px-24">
            <div className="md: flex-initial sm: flex-1 mr-1">
              <button
                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => (window.location.href = "#projects")}
              >
                View projects
              </button>
            </div>
            <div className="md: flex-initial sm: flex-1">
              <button
                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => (window.location.href = "#contact")}
              >
                Let's get in touch
              </button>
            </div>
          </div>
        </section>
      </section>
      <section id="projects">
        <div className="bg-black border-t-2 mt-10 text-white px-10 pt-8 pb-8">
          <h1 className="text-4xl font-semibold tracking-tighter">Projects</h1>
          <section>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 mt-10">
              {projects.map((x) => (
                <Project project={x} />
              ))}
            </div>
          </section>
        </div>
      </section>
      <section id="contact">
        <div className=" mt-10  px-10 pt-8 pb-8">
          <h1 className="text-4xl font-semibold tracking-tighter">
            Let's get in touch
          </h1>
          <section>
            <div className="w-full max-w-xl">
              <form className=" px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    placeholder="title"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Contact me
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const projects = (await getSomeProjects()) || [];

  return {
    props: { projects },
  };
}
