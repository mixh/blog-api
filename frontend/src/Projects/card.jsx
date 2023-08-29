import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import ChevronUpIcon from "../icons/ChevronUpIcon";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";

const Card = ({ date, name, description, link }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div
      className={`card bg-black text-justify font-mono text-white rounded-lg shadow-md p-4 flex flex-col ${
        expanded ? "h-auto" : "h-40"
      }`}
      layout
    >
      <div className="card-header capitalize">
        <p className="card-dates">{formattedDate}</p>
        <h2 className="card-name text-xl font-semibold mb-2 ">{name}</h2>
      </div>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.p
            key="description"
            className={`card-description text-amber-500 mb-4`}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
      {expanded && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="read-more-link text-blue-500 hover:underline self-end"
        >
          <ExternalLinkIcon className="w-5 h-5 inline mr-1" />
          Visit
        </a>
      )}
      <motion.button
        onClick={toggleExpand}
        className="mt-auto text-blue-500 hover:underline self-end flex items-center"
      >
        {expanded ? (
          <>
            <ChevronUpIcon className="w-5 h-5 mr-1" />
            Show Less
          </>
        ) : (
          <>
            <ChevronDownIcon className="w-5 h-5 mr-1" />
            Read More
          </>
        )}
      </motion.button>
    </motion.div>
  );
};

Card.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
