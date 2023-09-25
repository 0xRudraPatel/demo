import Feature from "./component/Feature";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Post from "./component/Post";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Post />
      <Feature />
      <Footer />
    </div>
  )
}
