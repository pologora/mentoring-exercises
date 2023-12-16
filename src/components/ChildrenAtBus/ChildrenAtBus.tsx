import { useRef, useState, SyntheticEvent } from 'react';
import style from './ChildrenAtBus.module.css';
import ChildrenList from './ChildrenList';

const ChildrenAtBus = () => {
  const [children, setChildren] = useState([
    {
      name: 'Barbara',
      age: '10',
    },
  ]);

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const handleAddChild = (e: SyntheticEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const age = ageRef.current?.value;
    if (name && age) {
      setChildren((prev) => [...prev, { name, age }]);
    } else {
      console.log('Not enough data to add the child');
    }
  };

  return (
    <div className={style.container}>
      <h2>Dzieci w autobusie</h2>
      <form className={style.form}>
        <div className={style.inputContainer}>
          <label htmlFor='name' className={style.label}>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            ref={nameRef}
            className={style.input}
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor='age' className={style.label}>
            Age
          </label>
          <input
            type='number'
            name='age'
            id='age'
            ref={ageRef}
            className={style.input}
          />
        </div>
        <input
          type='submit'
          value='Submit'
          onClick={handleAddChild}
          className={style.submitBtn}
        />
      </form>
      <div className={style.listContainer}>
        <ChildrenList children={children} />
      </div>
    </div>
  );
};
export default ChildrenAtBus;
