import React, { forwardRef, useEffect, useState } from "react";
import { StringObject } from "scent-typescript";
const src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjEyOCIKICAgaGVpZ2h0PSIxMjgiCiAgIHZpZXdCb3g9IjAgMCAzMy44NjY2NjcgMzMuODY2NjY3IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc4IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjUgKDIwNjBlYzFmOWYsIDIwMjAtMDQtMDgpIgogICBzb2RpcG9kaTpkb2NuYW1lPSJ3YWl0X2NpcmNsZS5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIj4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIgogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50ODUxIj4KICAgICAgPHN0b3AKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6I2NjY2NjYztzdG9wLW9wYWNpdHk6MTsiCiAgICAgICAgIG9mZnNldD0iMCIKICAgICAgICAgaWQ9InN0b3A4NDciIC8+CiAgICAgIDxzdG9wCiAgICAgICAgIHN0eWxlPSJzdG9wLWNvbG9yOiNjY2NjY2M7c3RvcC1vcGFjaXR5OjA7IgogICAgICAgICBvZmZzZXQ9IjEiCiAgICAgICAgIGlkPSJzdG9wODQ5IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIgogICAgICAgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50ODUxIgogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50ODUzIgogICAgICAgeDE9IjExLjMzMDI0MyIKICAgICAgIHkxPSIyOTAuNDQ2NjIiCiAgICAgICB4Mj0iNi45ODI0MTU3IgogICAgICAgeTI9IjI5NS4zNjMwMSIKICAgICAgIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMy43Nzk1Mjc2LDAsMCwzLjc3OTUyNzYsNDguMDAwMDA4LC0xMDc0LjUxOTcpIiAvPgogIDwvZGVmcz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iNCIKICAgICBpbmtzY2FwZTpjeD0iNTIuMzYxMDk2IgogICAgIGlua3NjYXBlOmN5PSIzNi43NzMzNDgiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgdW5pdHM9InB4IgogICAgIGJvcmRlcmxheWVyPSJ0cnVlIgogICAgIGlua3NjYXBlOnNuYXAtcGFnZT0idHJ1ZSIKICAgICBpbmtzY2FwZTpzbmFwLWJib3g9InRydWUiCiAgICAgaW5rc2NhcGU6YmJveC1wYXRocz0idHJ1ZSIKICAgICBpbmtzY2FwZTpiYm94LW5vZGVzPSJ0cnVlIgogICAgIGlua3NjYXBlOnNuYXAtYmJveC1lZGdlLW1pZHBvaW50cz0idHJ1ZSIKICAgICBpbmtzY2FwZTpzbmFwLWJib3gtbWlkcG9pbnRzPSJ0cnVlIgogICAgIGlua3NjYXBlOnNuYXAtb2JqZWN0LW1pZHBvaW50cz0idHJ1ZSIKICAgICBpbmtzY2FwZTpzbmFwLWNlbnRlcj0idHJ1ZSIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iOTk5IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSI0MCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IuODrOOCpOODpOODvCAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0yNjMuMTMzMzMpIj4KICAgIDxnCiAgICAgICBpZD0iZzg4NCIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KC0yLjY2NjYzMjQsMCwwLDIuNjY3ODE0NiwzMy44NjY1MjQsLTQ5NS4zMzE0NikiPgogICAgICA8cGF0aAogICAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDg1Myk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjQuNTQ2Njc5OTc7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgZD0iTSAyMy40MzM1OTQsMC4wMDU4NTkzOCBBIDIzLjk5OTk4MiwyMy45OTk5ODIgMCAwIDAgMTIsMy4yMTQ4NDM4IDIzLjk5OTk4MiwyMy45OTk5ODIgMCAwIDAgMy4yMTQ4NDM4LDM2IDIzLjk5OTk4MiwyMy45OTk5ODIgMCAwIDAgMjQsNDcuOTc4NTE2IHYgLTQuMTkxNDA3IGEgMTkuNzk4OTg5LDE5Ljc5ODk4OSAwIDAgMSAtMC4wMDk4LDAgQSAxOS43OTg5ODksMTkuNzk4OTg5IDAgMCAxIDQuMTkxNDA2MiwyMy45ODgyODEgMTkuNzk4OTg5LDE5Ljc5ODk4OSAwIDAgMSAyMy45OTAyMzQsNC4xODk0NTMxIDE5Ljc5ODk4OSwxOS43OTg5ODkgMCAwIDEgNDMuNzkxMDE2LDIzLjk4ODI4MSAxOS43OTg5ODksMTkuNzk4OTg5IDAgMCAxIDQxLjExOTE0MSwzMy44ODQ3NjYgbCAzLjYzODY3MSwyLjA5OTYwOSBBIDIzLjk5OTk4MiwyMy45OTk5ODIgMCAwIDAgNDQuNzg1MTU2LDEyIDIzLjk5OTk4MiwyMy45OTk5ODIgMCAwIDAgMjMuNDMzNTk0LDAuMDA1ODU5MzggWiIKICAgICAgICAgaWQ9InBhdGg4MTUiCiAgICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KC0wLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDEyLjcwMDAwMiwyODQuMykiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojY2NjY2NjO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDo0LjU0NjY3OTk3O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgIGQ9Ik0gMjMuNDUxMTcyLDAuMDA1ODU5MzggQSAyMy45OTk5ODIsMjMuOTk5OTgyIDAgMCAwIDEyLjAxNzU3OCwzLjIxNDg0MzggMjMuOTk5OTgyLDIzLjk5OTk4MiAwIDAgMCAyLjEyNSwxNC4yMzYzMjggbCAzLjY5MTQwNjIsMS45NDE0MDYgQSAxOS43OTg5ODksMTkuNzk4OTg5IDAgMCAxIDI0LDQuMjAxMTcxOSAxOS43OTg5ODksMTkuNzk4OTg5IDAgMCAxIDQzLjc5ODgyOCwyNCAxOS43OTg5ODksMTkuNzk4OTg5IDAgMCAxIDQxLjEzNDc2NiwzMy44ODI4MTIgbCAzLjY0MDYyNSwyLjEwMTU2MyBBIDIzLjk5OTk4MiwyMy45OTk5ODIgMCAwIDAgNDQuODAyNzM0LDEyIDIzLjk5OTk4MiwyMy45OTk5ODIgMCAwIDAgMjMuNDUxMTcyLDAuMDA1ODU5MzggWiIKICAgICAgICAgaWQ9InBhdGg4MTUtOSIKICAgICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoLTAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsMTIuNzAwMDAyLDI4NC4zKSIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgICAgPGVsbGlwc2UKICAgICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNjY2NjY2M7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMzk1MzY1MzM7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgaWQ9InBhdGg4ODYiCiAgICAgICAgIGN4PSIxMzAuMDc2OCIKICAgICAgICAgY3k9IjI2Ny44OTQ5NiIKICAgICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoLTAuOTEwMDk3MjMsMC40MTQzOTQ3OSwwLjQ0NjkwMzg3LDAuODk0NTgxOTksMCwwKSIKICAgICAgICAgcng9IjAuNTYwNTU0MzMiCiAgICAgICAgIHJ5PSIwLjQ4Mzc5NDc4IiAvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==";
/**
 * 待機中を示す回転する円のコンポーネント。
 *
 * @param props
 * @returns
 */
const WaitingCircle = forwardRef(({ ...props }, ref) => {
    const [transform, setTransform] = useState();
    const animation = () => {
        const frame = 1 / 200;
        let progress = 0;
        const update = () => {
            progress += frame;
            const degree = 360 * progress;
            const transformMaker = new StringObject("rotate(");
            transformMaker.append(degree);
            transformMaker.append("deg)");
            setTransform(transformMaker.toString());
            if (progress >= 1) {
                progress = 0;
            }
            setTimeout(() => {
                window.requestAnimationFrame(update);
            }, 30);
        };
        window.requestAnimationFrame(update);
    };
    useEffect(() => {
        animation();
    }, []);
    const { style, ...imageProps } = props;
    return (React.createElement("img", { src: src, style: { ...style, ...{ transform: transform } }, ref: ref, ...imageProps }));
});
export default WaitingCircle;
