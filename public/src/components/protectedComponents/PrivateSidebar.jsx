import React from "react";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import "../../css/private.css";
const PrivateSidebar = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="bg-[#ccc] w-1/6 h-full max-w-[300px] hidden lg:block">
      <Fragment>
        <Accordion open={open === 1}>
          <AccordionHeader
            className="accordion-header "
            onClick={() => handleOpen(1)}
          >
            Others
          </AccordionHeader>
          <AccordionBody className="accordion-body flex flex-col">
            <span className="accordion-list">3 card judgement</span>
            <span className="accordion-list">BACCARAT</span>
            <span className="accordion-list">Binary</span>
            <span className="accordion-list">Bollywood</span>
            <span className="accordion-list">Card 32</span>
            <span className="accordion-list">Casino Queen</span>
            <span className="accordion-list">Casino War</span>
            <span className="accordion-list">Cricket Casino </span>
            <span className="accordion-list">Dart</span>
            <span className="accordion-list">Lottery</span>
            <span className="accordion-list">Rate 20</span>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader
            className="accordion-header mt-1 "
            onClick={() => handleOpen(2)}
          >
            All Sports
          </AccordionHeader>
          <AccordionBody className="accordion-body flex flex-col">
            <span className="accordion-list">Tp T20</span>
            <span className="accordion-list">TP one day</span>
            <span className="accordion-list">TP test</span>
            <span className="accordion-list">cricket</span>
            <span className="accordion-list">soccer</span>
            <span className="accordion-list">casino</span>
            <span className="accordion-list"> spanve casino</span>
          </AccordionBody>
        </Accordion>
        {/*<Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            What can I do with Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
  </Accordion>*/}
      </Fragment>
    </div>
  );
};

export default PrivateSidebar;
