ALTER TABLE products
ADD COLUMN category VARCHAR(100);

UPDATE products
SET category = 'Electronica'
WHERE category IS NULL;