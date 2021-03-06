import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import classnames from 'classnames';

const Navigate = React.memo(({ isPushed, setIsPushed }) => {

   const handlerToggle = React.useCallback(() => {
      setIsPushed(!isPushed)
   }, [setIsPushed, isPushed])



   return (
      <nav className="navigate">
         <h1 className="navigate__title">Chillhop club</h1>
         <button onClick={handlerToggle} className={classnames("navigate__button", isPushed && "navigate__button_active")}>
            Песни
            <FontAwesomeIcon icon={faMusic} />
         </button>
      </nav>
   )
});

export default Navigate
