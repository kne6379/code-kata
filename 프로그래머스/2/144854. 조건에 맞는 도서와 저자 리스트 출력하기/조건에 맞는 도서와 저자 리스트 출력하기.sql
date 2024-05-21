-- 코드를 입력하세요
SELECT BOOK_ID, AUTHOR_NAME, date_format(PUBLISHED_DATE,'%Y-%m-%d') as PUBLISHED_DATE
FROM BOOK as b Left join AUTHOR  as a ON b.author_id = a.AUTHOR_ID
WHERE CATEGORY = "경제"
order by 3 asc;
