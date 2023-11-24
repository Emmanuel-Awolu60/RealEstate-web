import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import{MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'
const Value = () => {
  return (
    <section className="v-wrapper">
     <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
            <div className="image-container">
                <img src='./value.png' alt='value-image'></img>
            </div>
        </div>

        <div className="flexCloStart v-right">
            <span className='orangeText'>Our Value</span>
            <span className='primaryText'>Value We Give to You</span>
            <span className='secondaryText'>
                We always ready to help by providing best services for you.
                <br />
                We beleive a good blace to live can nake your life better
            </span>


            <Accordion
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}
            >
                {
                   data.map((item, i) => {
                    return (
                    <AccordionItem 
                    className='accordionItem' key={i} uuid={i}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="flexCenter icon">
                                    {item.icon}
                                </div>
                                <span className='primaryText'>
                                    {item.heading}
                                </span>
                                <div className='flexCenter icon'>
                                    <MdOutlineArrowDropDown size={2}/>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                    </AccordionItem>
                    );
                })
                }
                
            </Accordion>
        </div>
     </div>
    </section>
  )
}

export default Value
