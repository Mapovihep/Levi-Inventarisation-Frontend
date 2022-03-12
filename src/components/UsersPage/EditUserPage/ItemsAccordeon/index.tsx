import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import React, { useState } from "react"
import { IItem } from "../../../../interfaces";
import { ItemsList } from "../../../ItemsPage/ItemsList";
import { BtnDeleteEditGroup } from "./BtnDeleteEditGroup";
import './itemsAccordeon.css'

interface itemsAccordeonState {
    added: boolean,
}
interface itemsAccordeonProps{
    items: IItem[],
    addedToUserItems: IItem[]
}
export const ItemsAccordeon: React.FC<itemsAccordeonProps> = ({items, addedToUserItems}) => { 

    const [state, setState] = useState<itemsAccordeonState>({added: false});

    const AccordeonArrow =
            <div className="rectangleClass">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.25 0L5.25 9.1275L1.0575 4.935L0 6L6 12L12 6L10.9425 4.9425L6.75 9.1275L6.75 0H5.25Z" fill="#5A5A5A"/>
                </svg>
            </div>;
    
    return(
        <React.Fragment>
            <Accordion style={{border: "1px solid #DEDEDE", marginBottom: "10px"}}>
                {!state.added ? 
                <AccordionSummary
                expandIcon={AccordeonArrow} 
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <p style={{ margin: 'auto 15px auto 10px', fontSize: "20px" }}>{items[0].category}</p>
                </AccordionSummary> : 
                <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <BtnDeleteEditGroup />
                </AccordionSummary>}
                <AccordionDetails style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <ItemsList 
                    shortTable={true}
                    itemsByCategory={items} 
                    addedToUserItems={addedToUserItems}/>
                </AccordionDetails>
            </Accordion>
        </React.Fragment>
    )
}