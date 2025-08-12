import PropTypes from "prop-types";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export default function AccordionItem({
  title,
  description,
  docs,
  defaultOpen,
}) {
  return (
    <Disclosure defaultOpen={defaultOpen}>
      {({ open }) => (
        <div className="mb-3  rounded-lg overflow-hidden shadow-lg">
          <Disclosure.Button className="flex justify-between items-center w-full px-5 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold transition-colors">
            <span className="text-left">{title}</span>
            <ChevronUpIcon
              className={`w-5 h-5 transform transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-5 py-4 bg-white text-gray-700 space-y-3">
            <p className="text-sm">{description}</p>
            {docs && docs.length > 0 && (
              <ul className="list-disc pl-5 space-y-1">
                {docs.map((doc, idx) => (
                  <li key={idx} className="text-sm">
                    {doc}
                  </li>
                ))}
              </ul>
            )}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  docs: PropTypes.arrayOf(PropTypes.string),
  defaultOpen: PropTypes.bool,
};
