import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Article from './Article';
import Section from './Section';

function App() {
  const sections = ['사용되는 숫자는 0에서 9까지 서로 다른 숫자이다.',
                    '숫자는 맞지만 위치가 틀렸을 때는 볼.',
                    '숫자와 위치가 전부 맞으면 스트라이크.',
                    '숫자와 위치가 전부 틀리면 아웃. "틀렸다"는 게 중요하다.',
                    '물론 무엇이 볼이고 스트라이크인지는 알려주지 않는다.'];
  const footers = [ '1. 830 - 들어맞는 숫자가 아예 없으므로 아웃. 이때부터 0, 3, 8이 후보에서 빠지므로 남는 숫자는 1, 2, 4, 5, 6, 7, 9다.',
                    '2. 659 - 6이 있지만 위치가 다르므로 1볼. 게임 상으로는 어떤 숫자가 맞는지 모르기 때문에 가장 난감하다.',
                    '3. 264 - 2가 있고 위치가 맞으며, 6이 있지만 위치가 다르므로 1스트라이크 1볼.',
                    '4. 126 - 숫자는 전부 맞지만 위치는 6만 맞고 나머지 둘은 다르므로 1스트라이크 2볼.',
                    '5. 216 - 전부 맞으므로 승리.'];
  
  return (
    <div className="App">
      <Header h1='야구 게임 방식'></Header>
      <Article></Article>
      <Section sections={sections}></Section>
      <Footer footers={footers}></Footer>
    </div>
  );
}

export default App;
