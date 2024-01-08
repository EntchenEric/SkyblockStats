import { Paper, Text } from "@mantine/core";
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";


export function Header() {

    return (
        <div className="">
            <div className = "">
                <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
                    Skyblock Stats
                </Text>
            </div>
            <div className = "">
                <ColorSchemeToggle />
            </div>
        </div>
    )
}