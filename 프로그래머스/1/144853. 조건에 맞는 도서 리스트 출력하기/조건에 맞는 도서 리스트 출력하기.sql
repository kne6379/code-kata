-- 코드를 입력하세요
SELECT BOOK_ID, date_format(PUBLISHED_DATE,'%Y-%m-%d')
FROM BOOK
WHERE PUBLISHED_DATE LIKE ("2021%") && CATEGORY IN ("인문")
order by 2 asc