import { ActionIcon } from "@mantine/core";
import { SunIcon, MoonIcon } from "@modulz/radix-icons";

function LightDark() {
  const colorSchemeContext = useContext(ColorSchemeContext);
  const dark = colorSchemeContext.colorScheme === "dark";
  return (
    <div>
      <ActionIcon
        variant="outline"
        color={dark ? "yellow" : "blue"}
        onClick={() => colorSchemeContext.onChange(dark ? "light" : "dark")}
        title="Toggle color scheme"
      >
        {dark ? (
          <SunIcon style={{ width: 18, height: 18 }} />
        ) : (
          <MoonIcon style={{ width: 18, height: 18 }} />
        )}
      </ActionIcon>
    </div>
  );
}
