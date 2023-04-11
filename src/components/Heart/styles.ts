import { styled } from "@/styles";

export const HeartStyled = styled('div', {
  padding: 5,
  width: 25,
  height: 24,
  backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTcuNTE2IDNjMi4zODIgMCA0LjQ4NyAxLjU2NCA0LjQ4NyA0LjcxMiAwIDQuOTYzLTYuNTI4IDguMjk3LTEwLjAwMyAxMS45MzUtMy40NzUtMy42MzgtMTAuMDAyLTYuOTcxLTEwLjAwMi0xMS45MzQgMC0zLjA1NSAyLjAwOC00LjcxMyA0LjQ4Ny00LjcxMyAzLjE4IDAgNC44NDYgMy42NDQgNS41MTUgNS4zMTIuNjY3LTEuNjY2IDIuMzMzLTUuMzEyIDUuNTE2LTUuMzEyem0wLTJjLTIuMTc0IDAtNC4zNDYgMS4wNjItNS41MTYgMy40MTktMS4xNy0yLjM1Ny0zLjM0Mi0zLjQxOS01LjUxNS0zLjQxOS0zLjQwMyAwLTYuNDg0IDIuMzktNi40ODQgNi42ODkgMCA3LjI3IDkuOTAzIDEwLjkzOCAxMS45OTkgMTUuMzExIDIuMDk2LTQuMzczIDEyLTguMDQxIDEyLTE1LjMxMSAwLTQuNTg2LTMuNDE0LTYuNjg5LTYuNDg0LTYuNjg5eiIvPjwvc3ZnPg==")',
  backgroundRepeat: 'no-repeat',
  cursor: 'pointer',
  
  variants: {
    favorited: {
      true: {
        backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyNCAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDMuNDM1QzEwLjAxMSAtMS45NjQgMCAtMS4xNjIgMCA3LjAwM0MwIDExLjA3MSAzLjA2IDE2LjQ4NCAxMiAyMkMyMC45NCAxNi40ODQgMjQgMTEuMDcxIDI0IDcuMDAzQzI0IC0xLjExNSAxNCAtMS45OTYgMTIgMy40MzVaIiBmaWxsPSIjQ0YwQTBBIi8+Cjwvc3ZnPgo=")',
      },
    },
  }
});