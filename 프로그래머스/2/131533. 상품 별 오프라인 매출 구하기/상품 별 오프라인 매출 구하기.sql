-- 코드를 입력하세요
SELECT p.product_code, sum(p.PRICE * o.SALES_AMOUNT) as SALES
from product as p inner join OFFLINE_SALE as o on p.product_id = o.product_id 
group by 1
order by 2 desc, 1