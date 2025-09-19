## Portfolio Website

This is as open-source Personal-portfolio project, built using React-Ts, Tailwind & Tailwind-styled-components, React-Hook-Form and other.

It is easy to customize as per the requirements, and also this can be used as landing page for companies.

Eslint, Prettier, Husky, and Commit-lint-config are integrated to maintain the better code quality.

It is easy to deply on the Github pages & required configuration is implemented in the code.

### How to use
1. pull the code from [Github repo](https://github.com/devravinder/devravinder.github.io)

2. create a repository in your Github account

3. Change the git remote url

    ```git remote set-url origin your-repo-url ```

2. Run the app in local

    ```pnpm i``` (or) ```npm i```

    ```npm run dev```

3. update 

    i. favicon.png /public folder

    ii. images in /src/assets folder

    iii. the data in /src/constats/index.ts 

5. Commit the changes & push to your repo

6. Add email js secrets in .env file ( refer .env.sample )

6. npm run deploy

7. go to your Github repo settings, in the pages menu, under the branch section, select branch as 'gh-pages' & folder as '/root', and save. ( wait for the deployment )
8. visit the site using link shown in the Github pages




### Yet to do

1. change color schema
2. make responsive



### Thanks
Thanks to the developer [Adrian Hajdin](https://github.com/adrianhajdin) for the nice [3D Portfolio Project](https://github.com/adrianhajdin/project_3D_developer_portfolio/tree/main), which I took as a base for this project.

#### Changes I Made
1. converted to js project to ts
2. remove three.js, React Three Fiber, React Three Drei
3. used tailwind-styled-components for cleaner code
4. did code refactor ( used layouts, routes, removed css-js)
5. did some UI chnages & added new pages ( projects, project deatils)
6. integrated with code quality tools ( Eslint, Prettier, and other)
7. implemented Github pages deployment configuration


#### Note:-
```Before you use this code, please compare the both repos and use anyone, as per your requirement ```



### Cheers

Pull the code, change the data & deploy on your Github, Cheers! Your portfolio ready!

