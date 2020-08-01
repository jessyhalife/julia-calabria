import Head from "next/head";
import { getSomeProjects } from "../lib/graphcms";
import ContactForm from "../components/ContactForm";
import Project from "../components/Project";
import Link from "next/link";

export default function Home({ projects }) {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Julia Calabria</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="title" content="Julia Calabria" />
        <meta
          name="description"
          content="Editor, producer portfolio Julia Calabria."
        />
        <meta
          name="keywords"
          content="juli, julia, calabria, editor, ads, aftereffects, premier"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="jessyhalife" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="hero" className="min-h-screen">
        <div className="container mx-auto px-5">
          <h1 className="text-6xl pt-20 md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            Hi, I'm Julia Calabria.
          </h1>
          <div className="text-gray-600 mr-1">
            <i className="fas fa-map-marker-alt "> </i>
            <p className="ml-2 inline">Buenos Aires, Argentina.</p>
          </div>
        </div>
        <section>
          <div className="md:mx-20 sm: mx-auto my-8 mb-8 md:mb-16 max-w-md">
            <div className="mx-5 sm: mx-0">
              <p>Productora, editora y realizadora de contenido audiovisual.</p>
              <p className="font-semibold mt-2">
                _currently @ 
                <p className="inline text-gray-700 "> Ponce Buenos Aires</p>
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-evenly md:mx-8 sm: mx-auto my-8 mb-8 md:mb-16 max-w-md ">
            <div className="text-lg text-gray-700 ">
              <a href="https://ar.linkedin.com/in/juliacalabria">
                <i className="fab fa-linkedin "> </i>
              </a>
            </div>
            <div className="text-lg text-gray-700 ">
              <a href="https://www.facebook.com/qazwsxedcrfvtgbyhnujmikl">
                <i className="fab fa-facebook "> </i>
              </a>
            </div>
            <div className="text-lg text-gray-700 ">
              <a href="https://instagram.com/julicalabria">
                <i className="fab fa-instagram "> </i>
              </a>
            </div>
            <div className="text-lg text-gray-700 ">
              <a href="https://www.behance.net/juliaecalabria">
                <i className="fab fa-behance "> </i>
              </a>
            </div>
          </div>
        </section>
        <section id="links">
          <div className="flex px-24">
            <div className="md: flex-initial sm: flex-1 mr-1">
              <button
                className="text-sm bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => (window.location.href = "#projects")}
              >
                View projects
              </button>
            </div>
            <div className="md: flex-initial sm: flex-1">
              <button
                className="text-sm bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
            <div className="grid sm:grid-cols-1 md:grid-cols-3 mt-10 md:gap-8 row-gap-6 sm:row-gap-2">
              {projects.map((x) => (
                <Project key={x.id} project={x} />
              ))}
            </div>
            <div className="text-right">
              <Link href="/projects">
                <a className="text-lg">More</a>
              </Link>
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
            <ContactForm />
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
