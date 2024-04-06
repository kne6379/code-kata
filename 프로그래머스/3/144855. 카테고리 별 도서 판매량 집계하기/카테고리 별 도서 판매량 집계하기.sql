-- 코드를 입력하세요
SELECT b.category, sum(s.sales)
from BOOK as b left join BOOK_SALES as s on b.book_id = s.book_id
where date_format(SALES_DATE,'%Y-%m') = '2022-01'
group by b.category
order by b.category