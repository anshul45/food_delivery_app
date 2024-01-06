import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Login() {
    return <div>
        <Header/>
        <div>
            <input type="email"/>
            <input type="password"/>
        </div>
        <Footer/>
    </div>;
}