// Data Sample
/*
    [
        {
            target: "",
            stats: [-2,-1,-1,0, 1, 2]
        },
        {
            target: "",
            stats: [-2,-1,-1,0, 1, 2]
        },
    ]
*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getFeedbackSymbol from "../services/getFeedbackSymbol";
export default function ShowTries({ tries }) {
  
  return (
    <div className="card bg-base-100 shadow-xl p-6 w-full max-w-[95%] md:max-w-[80%] mb-10">
      <h2 className="text-xl font-semibold mb-4 text-center tracking-[0.25em]">
        ATTEMPTS
        <hr />
      </h2>

      <div className="flex flex-col items-center gap-4">
        {tries.length == 0 ? "START MAKING A GUESS!" : tries.map((attempt, index) => (
          <div key={index} className="flex gap-2">
            <div className="text-xl font-semibold w-10 text-center">
              Try {tries.length - index}
            </div>
            {attempt.try.split("").map((char, charIndex) => (
              <div
                key={charIndex}
                className={`card md:w-12 w-10 h-16 ${
                  attempt.stats[charIndex] == 0
                    ? "bg-primary text-base-100"
                    : "bg-base-200"
                } shadow-md flex flex-col items-center justify-center`}
              >
                <span className="text-lg font-semibold">{char}</span>
                <FontAwesomeIcon
                  icon={getFeedbackSymbol(attempt.stats[charIndex])}
                  className="text-xl mt-2"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
