// Turn the following SQL queries into Knex queries (you can write them next to each SQL query or below):

//1. SELECT * FROM students;
knex('students');
//2. SELECT * FROM students WHERE id=1;
knex('students').where({id:1});
//3. SELECT * FROM students WHERE id=5; LIMIT 1
knex('students').where({id:5}).limit(1);
//4. SELECT COUNT(*) students;
select count(*) from "students";
//5. SELECT MIN('year') FROM students;
select min("year") from "students";
//6. SELECT * FROM students WHERE name IS NOT NULL;
knex('students').whereNotNull('name');
//7. SELECT * FROM todos WHERE id IN ('1', '2', '3') OR user_id IN ('4', '5', '6');
knex.select('*').from('todos').whereIn('id', ['1','2','3']).orWhereIn('user_id', ['4','5','6']);
//8. SELECT * FROM students LIMIT 10 OFFSET 30;
knex.select('*').from('todos').limit(10).offset(30);
//9. INSERT INTO students (name,fav_color) VALUES ('tyler','purple');
knex('students').insert({name: 'tyler',fav_color: 'purple'});
//10. INSERT INTO students (name,fav_color) VALUES ('liz','blue') RETURNING *;
knex('students').returning('*').insert({name: 'liz',fav_color: 'blue'});
//11. UPDATE students SET name ='cho' WHERE id=5;
knex('students').where('id','=',5).update({name:'cho'});
//12. DELETE * FROM students;
knex('students').del();
//13. UPDATE "students" SET "score" = "score" + 10 WHERE id=1;
//14. SELECT * FROM "students" LEFT OUTER JOIN "todos" ON "students"."id" = "todos"."student_id".
//15. SELECT * FROM "students" RIGHT OUTER JOIN "todos" ON "students"."id" = "todos"."student_id";

// Answer the following questions:

// See the documentation for pluck - when would a method like this be useful?
// How do you specify that a column must be unique using Knex?
// How do you specify that a column can not be NULL using Knex?
// Can you also write raw SQL within knex queries? If so, how do you do that?