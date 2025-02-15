FROM node:21
WORKDIR "/opt/finan-sort"
COPY . ./
COPY package*.json .
RUN npm i
EXPOSE "3000"
CMD ["sleep", "infinity"]
