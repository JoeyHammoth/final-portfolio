import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import workshop from '~/assets/workshop.jpg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hello, I'm James!" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm a software engineer with extensive experience with <b>React</b>, <b>Tailwind</b>,{' '}
      <b>SwiftUI</b> and have done DevOps work with <b>Kubernetes</b> and{' '}
      <b>CI/CD</b> pipelines.<br></br>
      <br></br>
      In the past, I have worked at the <b>Walter and Eliza Hall Institute</b> and the {' '}
      <b>University of Melbourne</b>. Currently, I'm heavily involved at two burgeoning startups, <b>Scorkl</b>
      {' '}and <b>Sensure Medical</b>.
      <br></br>
      <br></br>I love contributing to startups and learning about new technologies. I'm also actively involved in several university clubs,
      {' '}currently serving as the executive secretary of the Melbourne BioInnovation Initiative and as the
      {' '}industry and sponsorships officer at the Unimelb Information Security Club.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${workshop} 480w, ${workshop} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="My first workshop at University of Melbourne"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
