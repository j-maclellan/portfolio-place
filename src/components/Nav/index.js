import React, { useEffect} from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import { Gi3DGlasses } from "react-icons/gi";

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    }= props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
    }, [currentPage]);
    
    return (
        <header>
            <h1>
                
                   <span role='img' aria-label="glasses"> <Gi3DGlasses/> John Maclellan </span> 
                
                
            </h1>
            <nav>
                <ul className="flex-row">
                    {pages.map((page) => (
                        <li className={`mx-2 ${
                            currentPage.name === page.name && 'navActive'
                        }`} key={page.name}>
                            <span onClick={()   => {
                                setCurrentPage(page)
                            }}
                            >
                                {capitalizeFirstLetter(page.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;