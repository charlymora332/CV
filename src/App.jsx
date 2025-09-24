import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import css from "./App.module.css";
import LinksContacto from "./components/LinksContacto";
import socialLinks from "./assets/imgenesContacto/imgContacto";
import Division from "./components/Division";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={css.ctnGeneral}>
      <header>
        <h6>C | M</h6>
        <h1>Carlos Eduardo Mora Herrera</h1>
        <p>Desarrollador Full Stack | React & .NET</p>
      </header>

      <main className={css.ctnInfo}>
        <aside className={css.ctnIzq}>
          {/* CONTACTO */}
          <section id="contacto">
            <h2>Contacto</h2>
            <div className={css.ctnContactoIteam}>
              {socialLinks.map((item) => (
                <LinksContacto
                  key={item.nombre}
                  img={item.icono}
                  text={item.nombre}
                  url={item.url}
                />
              ))}
            </div>
            <Division />
          </section>

          {/* IDIOMAS */}
          <section id="idiomas" className={css.idiomas}>
            <h2>Idiomas</h2>

            <span>
              <h6>Español:&nbsp; </h6>
              <p>Nativo</p>
            </span>

            <span>
              <h6>Inglés: &nbsp; </h6>
              <p>Técnico</p>
            </span>

            <Division />
          </section>

          {/* SKILLS / HABILIDADES */}
          <section id="skills">
            <h2>Habilidades Técnicas</h2>
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>Figma</li>
              <li>Angular</li>
            </ul>
            <h3>Backend</h3>
            <ul>
              <li>.NET</li>
              <li>APIs RESTful</li>
              <li>Entity Framework Core</li>
              <li>SQL</li>
            </ul>
            <h3>Herramientas</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Azure</li>
            </ul>
          </section>
        </aside>

        <section className={css.ctnDer}>
          <section id="sobre-mi">
            <h2>Sobre mí</h2>
            <p>
              Desarrollador Full Stack con enfoque en React y .NET, experiencia
              en APIs RESTful, arquitectura limpia y Entity Framework Core.
              Manejo sólido de JavaScript, CSS, Tailwind y Bootstrap. Tecnólogo
              del SENA y estudiante de Ingeniería de Sistemas (6.º semestre),
              con experiencia en proyectos como e-commerce y plataformas web,
              enfocado en crear soluciones funcionales, escalables y orientadas
              al usuario.
            </p>
            <Division />
          </section>
          <section id="educacion">
            <h2>Datos académicos</h2>
            <p>
              <strong>Ingeniería en Sistemas</strong> – Corporación Unificada
              Nacional de Educación Superior, CUN | 6.º semestre (2023 –
              Actualidad)
            </p>
            <p>
              <strong>Tecnología en Análisis y Desarrollo de Software</strong>–
              SENA | 2023 – 2025 Desarrollo Web FrontEnd – Egg Academy | 2023
              Programación
            </p>
            <p>
              <strong>Intermedia Full Stack</strong>– Talento Tech | 2024
              Inglés: A2 – Escuela de Idiomas | 2019
            </p>
            <Division />
          </section>
          <section id="proyectos">
            <h2>Proyectos</h2>
            <p>
              <strong>Web de adopción de mascotas</strong>– React, .NET, EF
              Core, APIs RESTful Desarrollo full stack aplicando arquitectura
              limpia, integrando frontend y backend, con enfoque en experiencia
              de usuario
            </p>
            <p>
              <strong>E-commerce TrivalMotos</strong>E-commerce TribalMotos –
              React, Tailwind, APIs RESTful Desarrollo frontend y consumo de
              APIs para gestión de productos y usuarios, creando interfaz
              responsiva y moderna
            </p>
            <Division />
          </section>
          <section id="experiencia">
            <h2>experiencia</h2>
            <h3>AxaColpatria Desarrollador .NET / Full Stack</h3>
            <p>
              Desarrollo y mantenimiento de aplicaciones .NET integrando APIs
              RESTful y bases de datos SQL
            </p>
            <Division />
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
