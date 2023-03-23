import Container from "@/components/common/container";

export function Footer(props) {
    return (
        <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
            <div className="text-sm text-center">
                Copyright © {new Date().getFullYear()} {props?.copyright}. All
                rights reserved.
            </div>
            <div className="flex justify-center gap-1 mt-1 text-sm text-center text-gray-500 dark:text-gray-600">
                <span>
                    {" "}
                    Made by{" "}
                    <a
                        href="#"
                        rel="noopener"
                        target="_blank">
                        thaipham-coder
                    </a>
                </span>
            </div>
        </Container>
    );
}