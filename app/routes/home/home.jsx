import gamestackTexture2Large from "~/assets/gamestack-list-large.jpg";
import gamestackTexture2Placeholder from "~/assets/gamestack-list-placeholder.jpg";
import gamestackTexture2 from "~/assets/gamestack-list.jpg";
import gamestackTextureLarge from "~/assets/gamestack-login-large.jpg";
import gamestackTexturePlaceholder from "~/assets/gamestack-login-placeholder.jpg";
import gamestackTexture from "~/assets/gamestack-login.jpg";
import agtuary1 from "~/assets/agtuary_evaluation_1.jpg";
import agtuary2 from "~/assets/agtuary_evaluation_2.jpg";
import suncorpMicroservice from "~/assets/policy-generator-microservice.jpg";
import melodify from "~/assets/melodify.jpg";
import sliceTextureLarge from "~/assets/slice-app-large.jpg";
import sliceTexturePlaceholder from "~/assets/slice-app-placeholder.jpg";
import sliceTexture from "~/assets/slice-app.jpg";
import sprTextureLarge from "~/assets/spr-lesson-builder-dark-large.jpg";
import sprTexturePlaceholder from "~/assets/spr-lesson-builder-dark-placeholder.jpg";
import sprTexture from "~/assets/spr-lesson-builder-dark.jpg";
import { Footer } from "~/components/footer";
import { baseMeta } from "~/utils/meta";
import { Intro } from "./intro";
import { Profile } from "./profile";
import { ProjectSummary } from "./project-summary";
import { Heading } from "~/components/heading";
import { Button } from "~/components/button";
import { Section } from "~/components/section";
import { useEffect, useRef, useState } from "react";
import WorkExperience from "./workexpeirnece";
import config from "~/config.json";
import styles from "./home.module.css";
import Social from "./social";

import reactIcon from "~/assets/tech-stack/react.png";
import reactNativeIcon from "~/assets/tech-stack/react-native.svg";
import typescriptIcon from "~/assets/tech-stack/typescript.png";
import javaScriptIcon from "~/assets/tech-stack/javascript.png";
import kubernetesIcon from "~/assets/tech-stack/kubernetes.png";
import figmaIcon from "~/assets/tech-stack/figma.png";
import springbootIcon from "~/assets/tech-stack/springboot.png";
import awsIcon from "~/assets/tech-stack/aws.png";
import postgresIcon from "~/assets/tech-stack/postgres.png";
import dockerIcon from "~/assets/tech-stack/docker.png";
import jenkinsIcon from "~/assets/tech-stack/jenkins.png";
import { IconButton } from "~/components/iconButton/iconButton";
import { Connect as FinalConnect } from "./connect";

import swiftIcon from "~/assets/tech-stack/swift.png";
import swiftUIIcon from "~/assets/tech-stack/swiftui.png";
import coreDataIcone from "~/assets/tech-stack/core-data.png";
import sqliteIcon from "~/assets/tech-stack/sqlite.png";
import unityIcon from "~/assets/tech-stack/unity-logo.png";
import cSharpIcon from "~/assets/tech-stack/c-sharp-logo.png";
import hlslIcon from "~/assets/tech-stack/hlsl-logo.jpg";
import tkinterIcon from "~/assets/tech-stack/tkinter.png";
import pythonIcon from "~/assets/tech-stack/python.png";
import tensorIcon from "~/assets/tech-stack/tensorflow.png";
import jupyterIcon from "~/assets/tech-stack/jupyter.png";

import sleepybell1 from "~/assets/sleepybell_1.gif";
import sleepybell2 from "~/assets/sleepybell_2.gif";
import lastman from "~/assets/last-man.png";
import ttt from "~/assets/tictactoe.png";

import { Link as RouterLink, useLocation } from "@remix-run/react";
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from "~/layouts/project";

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: "prefetch",
      href: "/draco/draco_wasm_wrapper.js",
      as: "script",
      type: "text/javascript",
      importance: "low",
    },
    {
      rel: "prefetch",
      href: "/draco/draco_decoder.wasm",
      as: "fetch",
      type: "application/wasm",
      importance: "low",
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: "Software Engineer",
    description: `Software engineer portfolio of ${config.name} — a developer with experience in full stack, mobile, cloud and devops among other things.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();
  const finalconnect = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections((prevSections) => [...prevSections, section]);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: "-100% 0px 0px 0px" }
    );

    sections.forEach((section) => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />

      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <ProjectSectionContent>
        <ProjectTextRow center>
          <ProjectSectionHeading>My Work Experience</ProjectSectionHeading>
        </ProjectTextRow>
      </ProjectSectionContent>
      {/* <Section>
        <Heading as="h4" level={4}>
          Work Experience
        </Heading>
      </Section> */}
      <div className={styles.sectionTitle}></div>
      <WorkExperience></WorkExperience>
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="SleepyBell"
        description={
          <>
            SleepyBell is a modern, feature-rich alarm clock and sleep tracking
            application designed for iOS devices. Built using <b>SwiftUI</b> and{" "}
            <b>native iOS frameworks</b>, SleepyBell not only allows users to
            set and manage multiple alarms but also collects, aggregates, and
            visualizes sleep data. Its sleek, intuitive interface and robust
            functionality make it a powerful tool for anyone looking to improve
            their sleep habits and wake up on time.
          </>
        }
        buttonText="View Project"
        buttonLink="https://github.com/JoeyHammoth/SleepyBell"
        techstack="SwiftUI, Swift, Core Data, SQLite"
        techstackIcons={
          <>
            <IconButton file={swiftUIIcon} />
            <IconButton file={swiftIcon} />
            <IconButton file={coreDataIcone} />
            <IconButton file={sqliteIcon} />
          </>
        }
        model={{
          type: "phone",
          alt: "SleepyBell Home Screen",
          textures: [
            {
              srcSet: `${sleepybell1} 375w, ${sleepybell1} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
            {
              srcSet: `${sleepybell2} 375w, ${sleepybell2} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="The Last Man Standing"
        description={
          <>
            Developed in <b>Unity3D</b>, The Last Man Standing is a 2.5D
            hack-and-slash survival game that leverages custom <b>ShaderLab</b>{" "}
            and <b>HLSL</b> shaders for advanced visual effects. Core mechanics
            are implemented in <b>C#</b>, featuring real-time physics, dynamic
            zombie AI, and a modular construction system for deploying shelters
            and obstacles.
          </>
        }
        buttonText="View Project"
        techstack="Unity3D, ShaderLab, HLSL, C#"
        techstackIcons={
          <>
            <IconButton file={unityIcon} />
            <IconButton file={cSharpIcon} />
            <IconButton file={hlslIcon} />
          </>
        }
        buttonLink="https://github.com/JoeyHammoth/project-2-random"
        model={{
          type: "laptop",
          alt: "Last Man Standing Video Game",
          textures: [
            {
              srcSet: `${lastman} 1280w, ${lastman} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Tic-Tac-Toe AI"
        description={
          <>
            This is a Tic-Tac-Toe AI simulator developed in <b>Python</b> using{" "}
            <b>Tkinter</b>
            for the GUI, <b>TensorFlow</b> for neural network support, and{" "}
            <b>Jupyter Notebook</b> for interactive execution. It integrates
            four AI strategies—Random, Minimax (with configurable max depth),
            Monte Carlo Tree Search (with tunable exploration), and a Multilayer
            Perceptron (with adjustable iterations and training games). The
            simulator supports both human-AI and AI vs AI gameplay, with options
            to set the first player and a built-in scoring system.
          </>
        }
        techstack="Tkinter, Python, Jupyter Notebook, TensorFlow"
        techstackIcons={
          <>
            <IconButton file={tkinterIcon} />
            <IconButton file={pythonIcon} />
            <IconButton file={jupyterIcon} />
            <IconButton file={tensorIcon} />
          </>
        }
        buttonText="View project"
        buttonLink="https://github.com/JoeyHammoth/tictactoe-AI"
        model={{
          type: "laptop",
          alt: "AI Tic Tac Toe Sim",
          textures: [
            {
              srcSet: `${ttt} 800w, ${ttt} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <FinalConnect
        sectionRef={finalconnect}
        visible={true}
        id="finalconnect"
      />
      <Footer />
    </div>
  );
};
