INSERT INTO movie (title, description, releasedate, genre) 
VALUES 
  ('Inception', 'A mind-bending thriller about dream infiltration', '2010-07-16', ARRAY['Action', 'Sci-Fi']),
  ('The Shawshank Redemption', 'A story of hope and redemption in the face of adversity', '1994-10-14', ARRAY['Drama']),
  ('The Godfather', 'A classic crime drama about the Corleone family', '1972-03-24', ARRAY['Crime', 'Drama']),
  ('The Dark Knight', 'A gripping tale of chaos and heroism in Gotham City', '2008-07-18', ARRAY['Action', 'Crime', 'Drama']),
  ('Pulp Fiction', 'An interconnected tale of crime, violence, and pop culture', '1994-10-14', ARRAY['Crime', 'Drama']),
  ('Forrest Gump', 'The epic journey of a simple man through historical events', '1994-07-06', ARRAY['Drama', 'Romance']),
  ('The Matrix', 'A groundbreaking science fiction film exploring the nature of reality', '1999-03-31', ARRAY['Action', 'Sci-Fi']),
  ('Schindler''s List', 'The true story of Oskar Schindler''s efforts to save Jews during the Holocaust', '1993-12-15', ARRAY['Biography', 'Drama', 'History']),
  ('Fight Club', 'An underground fight club leads to a descent into anarchy', '1999-10-15', ARRAY['Drama']),
  ('Goodfellas', 'A gripping portrayal of the rise and fall of a mobster', '1990-09-19', ARRAY['Crime', 'Drama']);

INSERT INTO genre (name) 
VALUES 
  ('Action'),
  ('Adventure'),
  ('Animation'),
  ('Biography'),
  ('Comedy'),
  ('Crime'),
  ('Drama'),
  ('Fantasy'),
  ('History'),
  ('Horror'),
  ('Mystery'),
  ('Romance'),
  ('Sci-Fi'),
  ('Thriller');
