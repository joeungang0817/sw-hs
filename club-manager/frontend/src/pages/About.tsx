import Layout from "../components/Layout";

interface AboutProps {
  onLogout?: () => void;
}

function About({ onLogout }: AboutProps) {
  return (
    <Layout onLogout={onLogout}>
      <div className="about-panel">
        <h2>우리 동아리를 소개합니다!</h2>
        <p>
          우리는 컴퓨터 소프트웨어와 최신 웹 기술을 연구하고,
          <br />
          학교와 친구들에게 필요한 유용한 서비스를 직접 만드는 동아리입니다.
        </p>
      </div>
    </Layout>
  );
}

export default About;
