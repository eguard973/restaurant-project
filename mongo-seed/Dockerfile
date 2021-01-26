FROM mongo

COPY init.json /init.json

CMD mongoimport --host mongodb --db restaurant --drop --collection food --type json --file init.json --jsonArray
