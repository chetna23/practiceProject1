import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">username</label>
        <input id="username" type="text" />
        <label htmlFor="age">age (years)</label>
        <input id="age" type="number" />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
