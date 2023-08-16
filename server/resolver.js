import db from "./database.js";

const resolvers = {
  Query: {
    getBugs: async () => {
      const [rows] = await db.query('SELECT * FROM bug_table');
      return rows;
    },
  },

  Mutation: {
    addBug: async (_, { bug_name, bug_status }) => {
      const [result] = await db.query('INSERT INTO bug_table (bug_name, bug_status) VALUES (?, ?)', [bug_name, bug_status]);
      const insertedBugId = result.insertId;
  
      console.log('Inserted Bug ID:', insertedBugId); 
      const [insertedRow] = await db.query('SELECT * FROM bug_table WHERE id = ?', [insertedBugId]);
      console.log('Inserted Row:', insertedRow); 
  
      return insertedRow[0]; 
    },
    updateBug: async (_, { id, bug_name, bug_status }) => {
      await db.query('UPDATE bug_table SET bug_name = ?, bug_status = ? WHERE id = ?', [bug_name, bug_status, id]);
  
      const [updatedRow] = await db.query('SELECT * FROM bug_table WHERE id = ?', [id]);
  
      if (!updatedRow) {
        throw new Error(`Bug with ID ${id} not found`);
      }
  
      return updatedRow[0]; 
    },
    deleteBug: async (_, { id }) => {
      await db.query('DELETE FROM bug_table WHERE id = ?', [id]);
      return true; 
    },
  },
};

export default resolvers;
