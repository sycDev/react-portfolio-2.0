# React Portfolio 2.0

My portfolio v2 built with [React v18](https://reactjs.org) and [Tailwind CSS v3](https://tailwindcss.com) 
using simple portfolio starter [template](https://github.com/realstoman/react-tailwindcss-portfolio).

Other Dependencies:

- [React Router](https://github.com/remix-run/react-router)
- [TailwindCSS Element](https://github.com/mdbootstrap/Tailwind-Elements)
    - [Lightbox](https://tailwind-elements.com/docs/standard/components/lightbox/)
    - [Gallery](https://tailwind-elements.com/docs/standard/components/gallery/)
- [React Hot Toast](https://github.com/timolins/react-hot-toast)
- [React Scroll](https://github.com/fisshy/react-scroll)
- [React Framer Motion](https://github.com/framer/motion)
- [React Icons](https://github.com/react-icons/react-icons)
- [React Player](https://github.com/cookpete/react-player)


## Environment Setup

Use environment variables to handle sensitive information securely.\
Do **not** hardcode sensitive URLs or API keys directly into the codebase.

### Local Development

1. Create a `.env.local` file in the root of your project.
2. Define the environment variables in the `.env.local` file:

    ```plaintext
    REACT_APP_CONTACT_FORM_URL=${HEROTOFU_FORM_URL}
    ```
3. Install dependencies using your package manager:


    ```bash
    yarn install
    ```

4. Run the app

    ```bash
    yarn start
    ```

    Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

    The page will reload when you make changes. You may also see any lint errors in the console.

5. After adding new TailwindCSS className, rebuild the css using the command [Postcss CLI](https://github.com/postcss/postcss-cli)

    ```bash
    yarn build:css
    ```
