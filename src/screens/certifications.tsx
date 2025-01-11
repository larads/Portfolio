import { BookOpenUser, Link } from "@phosphor-icons/react";
import { Button } from "../components/button";
import { Card,CardHeader ,CardTitle,CardContent, CardFooter} from "../components/card";
import { useLanguage } from "../context/language";

export function Certifications() {
    const { language } = useLanguage();

    return(
        <>
            <h1 className="text-white text-5xl text-center pt-10 mobile:text-4xl">
                {language === "pt" ? "Certificados" : "Certificates"}
            </h1>
            <div className="p-10 flex gap-5 flex-wrap justify-center">
                <Card className="w-72 h-[22rem]">
                    <CardHeader>
                    <CardTitle>Node.js</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <div className="flex-row items-center space-x-2">
                            <img
                                className="w-40 h-40"
                                src="https://skillicons.dev/icons?i=nodejs"
                                alt="icon nodejs"
                            />
                            <div className="flex space-x-4 items-center mt-4 justify-center">
                                <BookOpenUser />
                                <p>{language === "pt" ? "Formação" : "Education"}</p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-center gap-2">
                    <Button className="p-0">
                        <a
                        rel="noreferrer"
                        href="https://app.rocketseat.com.br/certificates/69a6d630-9565-4978-bba6-f75502f2241b"
                        target="_blank"
                        className="flex items-center justify-center gap-1 w-24 h-full transition ease-in-out delay-100 hover:text-vermelhoPrincipal"
                        >
                        <Link />
                            {language === "pt" ? "Certificado" : "Certificate"}
                        </a>
                    </Button>
                    </CardFooter>
                </Card>
                <Card className="w-72 h-[22rem]">
                    <CardHeader>
                        <CardTitle>React</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <div className="flex-row items-center space-x-2">
                            <img
                                className="w-40 h-40"
                                src="https://skillicons.dev/icons?i=react"
                                alt="icon react"
                            />
                            <div className="flex space-x-4 items-center mt-4 justify-center">
                                <BookOpenUser />
                                <p>{language === "pt" ? "Formação" : "Education"}</p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-center gap-2">
                    <Button className="p-0">
                        <a
                            rel="noreferrer"
                            href="https://app.rocketseat.com.br/certificates/1e6c293e-467d-4242-bb00-ea7cf533451f"
                            target="_blank"
                            className="flex items-center justify-center gap-1 w-24 h-full transition ease-in-out delay-100 hover:text-vermelhoPrincipal"
                        >
                            <Link />
                            {language === "pt" ? "Certificado" : "Certificate"}
                        </a>
                    </Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}