import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export const Date = ({ date, setDate }) => {
  const goToPrevDate = () => {
    setDate((day) => day.subtract(1, "day"));
  };
  const goToNextDate = () => {
    setDate((day) => day.add(1, "day"));
  };

  return (
    <div className="flex justify-between m-3 text-white">
      <FontAwesomeIcon icon={faCaretLeft} onClick={goToPrevDate} size="2x" />
      <div className="text-xl">{date.format("YYYY/MM/DD - ddd")}</div>
      <FontAwesomeIcon icon={faCaretRight} onClick={goToNextDate} size="2x" />
    </div>
  );
};
