import { useEffect, useState } from "react";
import UnderConstruction from "../components/section/Underconstruction";
import { blogService } from "../services/blogService";
import { testGetSHeet } from "../services/testGetSheet";

export default function Blog() {


    // const [blogData, setBlogData] = useState(null);


    // useEffect(() => {

    //     const loadDataProfile = async () => {
    //         const data = await testGetSHeet();

    //         setBlogData(data);
    //     }
    //     loadDataProfile();

    // }, []);

    
    // console.log(blogData)





    return (
        <section>

            <UnderConstruction />

        </section>
    )

}