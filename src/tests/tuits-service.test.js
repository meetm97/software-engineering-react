import {createTuit, deleteTuit, deleteTuitByContent} from "../services/tuits-service.js";
import {
  createUser,
  deleteUsersByUsername, findAllUsers,
  findUserById
} from "../services/users-service.js";
import 'regenerator-runtime/runtime' 

describe('can create tuit with REST API', () => {
  
  const foru1 = {
    username: 'foru',
    password: 'foru123',
    email: 'foru@foru.com'
  };
  const tuit1 = {
    tuit : 'Hi i am meet'
  };

  // setup test before running test
  beforeAll(() => {
    // remove any/all users to make sure we create it in the test
    return deleteUsersByUsername(foru1.username) && deleteTuitByContent(tuit1.tuit);
  })

  // clean up after test runs
  afterAll(() => {
    // remove any data we created
    return deleteUsersByUsername(foru1.username) && deleteTuitByContent(tuit1.tuit);
  })

  test('can insert new tuits with REST API', async () => {

    // insert the user in the database
    const newUser = await createUser(foru1);

    // verify new user matches the parameter user
    expect(newUser.username).toEqual(foru1.username);
    expect(newUser.password).toEqual(foru1.password);
    expect(newUser.email).toEqual(foru1.email);
    
    // insert tuit in the database
    const newTuit = await createTuit(newUser._id,tuit1);
    expect(newTuit.tuit).toEqual(tuit1.tuit);
  });
});

describe('can delete tuit wtih REST API', () => {
  const foru1 = {
    username: 'foru',
    password: 'foru123',
    email: 'foru@foru.com'
  };
  const tuit1 = {
    tuit : 'Hi i am meet'
  };
  let dummyUser = "";
  let newTuit = "";
  // setup test before running test
  beforeAll(async() => {
    dummyUser = await createUser(foru1);
    newTuit = await createTuit(dummyUser._id, tuit1);
  })

  // clean up after test runs
  afterAll(() => {
    // remove any data we created
    deleteTuitByContent(tuit1.tuit);
    return deleteUsersByUsername(foru1.username);
  })

  test('can delete users from REST API by username', async () => {
    // delete a user by their username. Assumes user already exists
    const status = await deleteTuitByContent(tuit1.tuit);

    // verify we deleted at least one user by their username
    expect(status.deletedCount).toBeGreaterThanOrEqual(1);
  });

});

describe('can retrieve a tuit by their primary key with REST API', () => {
  // TODO: implement this
});

describe('can retrieve all tuits with REST API', () => {
  // TODO: implement this
});