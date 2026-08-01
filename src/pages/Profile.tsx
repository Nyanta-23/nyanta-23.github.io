import Bio from "../components/section/Bio";
import Skills from "../components/section/Skills";
import Experience from "../components/section/Experience";
import Education from "../components/section/Education";
import Certification from "../components/section/Certification";
import { useEffect } from "react";
import { profile } from "../services/profileService";

export default function Profile() {

    useEffect(() => {

        const loadDataProfile = async () => {
            const data = await profile();

        }

        loadDataProfile();

    }, []);


    return (
        <section className="px-6 my-5">
            <Bio />
            <Skills />
            <Experience />
            <Education />
            <Certification />

        </section>
    )
}