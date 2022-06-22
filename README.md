  <h1 align="center">Project Info for the Recruiter</h1>

## Built With

Some of the tools used in this project:

-   Redux-Toolkit
-   Redux-Persist
-   Tilework Opus
-   Styled Components

<br />

## Notes

-   Instead of creating seperate slices for the cart and the currency I directly created a rootSlice in order to to access the switched currency data inside the cart slice. So that I can change the pricing object of already added cart-items when the currency changes. Maybe there is a better way to do it.
-   About pagination topic the guideline said that it was not expected. Also stating to think about scalability of the Application. So I'm a bit confused as to if I should build a pagination or just Load more button at the bottom...

Can't wait to hear your Feedback.😃😃
