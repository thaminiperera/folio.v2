import React, { useEffect } from "react";
import Namebar from "../components/Namebar.jsx";
import { workitems } from "../workitems.js";
import Footer from "../components/Footer.jsx";

const Interpreter = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  const index = 0;
  return (
    <div>
      <div className="relative w-full h-[200px] raleway text-[20px]">
        <div className="absolute insert-0 w-full z-10 h-[100%] bg-gradient-to-b from-[var(--gold)] to-[var(--black)] opacity-70"></div>
        <img
          className="w-full h-full object-cover absolute z-0"
          src="src\assets\footgear\footgear_cover.jpg"
          alt="Interpreter Cover"
        />

        <div className="absolute insert-0 w-full z-20">
          <Namebar next={"/doclocator"} />
        </div>
      </div>

      <div className="w-full  text-[var(--gold)] flex justify-center bg-[#1F1F1E] min-h-dvh mb-[20px] md:mb-[50px] fade-in">
        <div className="lg:w-[60%] center bg-[var(--black)] px-[20px] md:px-[30px] lg:px-[50px]">
          <div className="block italiana-bold text-[40px] md:text-[60px] mt-[20px] uppercase">
            Basic-inspired language interpreter
          </div>
          <div className="text-justify mt-2 raleway block">
            As part of my journey to delve deeper into the mechanics of
            programming languages and their interpretation, I decided to build a
            custom interpreter for a language inspired by BASIC. The goal was to
            create an interactive, robust, and extensible interpreter capable of
            parsing, tokenizing, and executing code with minimal overhead, while
            providing clear error reporting and debugging capabilities. Here's a
            breakdown of the key design decisions and how they guided the
            development of the interpreter.
          </div>
          <div className="flex gap-5 block">
          <a target="_blank" href="https://github.com/thaminiperera/interpreter"><div className="flex items-center gap-2 mt-[30px] md:mt-[50px] raleway-bold underline ">
              Github Link{" "}
              {
                <img
                  className="w-[10px] h-[10px]"
                  src="src\assets\up-right-arrow.png"
                />
              }
             
            </div> </a>

            <a target="_blank" href="https://tdp-interpreter.netlify.app/"><div className="flex items-center gap-2 mt-[30px] md:mt-[50px] raleway-bold underline ">
              Demo{" "}
              {
                <img
                  className="w-[10px] h-[10px]"
                  src="src\assets\up-right-arrow.png"
                />
              }
            </div></a>
          </div>
          <div className="flex gap-2 my-2 raleway-bold block">
            Technologies :{" "}
            {workitems[index].tags.map((tag) => (
              <div
                key={tag}
                className=" rounded-lg raleway-bold text-[12px] px-2 py-1 text-[var(--red)] border border-[var(--red)]"
              >
                {tag}
              </div>
            ))}
          </div>
          <div>
            <h1 className="block uppercase italiana-bold text-[30px] md:text-[40px] md:mt-[50px] mt-[30px]">
              High-Level Design and Key Components
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-5 w-full raleway mt-[20px]">
            <div className="w-[100%] md:w-[50%] flex justify-center items-center block">
              <img
                className="w-[100%] md:w-[100%] h-[100px] border border-[var(--gold)]"
                src="src\assets\interpreter\interpreter_shell.png"
              />
            </div>
            <div className="w-[100%] md:w-[50%] text-justify block">
              The interpreter was designed to be modular, following the classic
              structure of a language interpreter: tokenization, parsing,
              execution, and error handling. I focused on clarity and
              maintainability, making it easy to add new features and enhance
              functionality in the future. Here’s how each component was
              implemented.
            </div>
          </div>
          <div className="raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px] block ">
            Tokenization: The Lexer
          </div>
          <div className="raleway text-justify mt-[20px] block">
            The first step in processing the input source code is tokenization.
            To achieve this, I created a lexer that reads a sequence of
            characters and converts them into manageable tokens. Each token
            represents a meaningful element in the language, such as keywords,
            operators, literals, or identifiers.
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Key Decisions:
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                <b>Position Tracking:</b> Using a Position class, the lexer
                tracks the position of each character in the input (line,
                column, and index). This proved invaluable when debugging and
                reporting errors, allowing for precise pinpointing of problems
                in the source code.
              </li>
              <li className="">
                <b>Token Types:</b> The lexer defines token types (e.g., TT_INT,
                TT_FLOAT, TT_STRING) and keywords like VAR, IF, FOR, ensuring
                accurate representation of language constructs. Each token also
                captures its value and position, making it easier to handle
                runtime errors later in the interpreter.
              </li>
              <li className=" ">
                <b>Error Handling:</b> During tokenization, I integrated robust
                error handling to catch illegal characters and unexpected
                syntax. For instance, if the lexer encounters an unrecognized
                character, it raises an IllegalCharError, ensuring that invalid
                inputs are promptly rejected before reaching later stages of
                interpretation.
              </li>
              <li className=" ">
                <b>Whitespace & Comments:</b> The lexer efficiently handles
                comments and whitespace, skipping over them without affecting
                the parsing process, ensuring a clean token stream for the
                parser to work with.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px]">
            Parsing: Building the Abstract Syntax Tree (AST)
          </div>
          <div className="block raleway text-justify mt-[20px]">
            Once the lexer produces a list of tokens, the next step is parsing
            them into an Abstract Syntax Tree (AST). The parser processes tokens
            sequentially, transforming them into structured nodes that represent
            the language's syntax. Each node type corresponds to a specific
            language construct, such as expressions, variables, and control flow
            statements.
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Key Decisions:
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                <b>Recursive Descent Parsing:</b> I implemented a recursive
                descent parser, which breaks down expressions, control
                structures, and statements using a set of mutually-recursive
                methods. This method is simple and intuitive, making it easy to
                add new syntax rules if necessary.
              </li>
              <li className="">
                <b>Modularity:</b> Each component of the language (e.g.,
                expressions, statements, loops) has its own parsing function.
                This modular approach allowed me to keep the codebase clean and
                focused, making maintenance and debugging more manageable.
              </li>
              <li className="">
                <b>Error Handling:</b> The parser uses custom error classes like
                ExpectedCharError and InvalidSyntaxError to catch mistakes in
                syntax or mismatched tokens. This ensures that invalid syntax is
                caught early in the parsing stage, preventing complex errors
                from bubbling up to the runtime.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px]">
            Execution: Interpreting the AST
          </div>
          <div className="block raleway text-justify mt-[20px]">
            After parsing, the interpreter executes the AST, where each node is
            processed to perform the desired operation. The interpreter follows
            a visitor pattern, where specific methods handle different node
            types (e.g., visit_BinOpNode for binary operations,
            visit_VarAccessNode for variable access, etc.)
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Key Decisions:
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                <b>Runtime Environment:</b> The interpreter maintains a symbol
                table to store variable values. It uses contexts to manage
                scopes, ensuring that variables are correctly resolved in the
                appropriate scope (e.g., local vs. global).
              </li>
              <li className="">
                <b>Value Class:</b> A key design decision was the creation of a
                Value class that serves as the base class for all types of
                values in the interpreter (e.g., Number, String, List). This
                allows for polymorphism, where operations on different types
                (like arithmetic operations or comparisons) can be handled
                uniformly through the Value interface.
              </li>
              <li className="">
                <b>Control Flow Handling:</b> The interpreter supports control
                flow through if, for, while loops, and function calls. Each
                control flow construct (like visit_IfNode or visit_WhileNode)
                processes the associated node, executing the appropriate block
                of code when conditions are met. Special control flow nodes like
                ReturnNode, ContinueNode, and BreakNode manage the flow of
                execution and ensure that statements like return, continue, and
                break work as expected.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px]">
            Error Handling: Clear and Descriptive Reporting
          </div>
          <div className="block raleway text-justify mt-[20px]">
            Error handling was a critical aspect of the interpreter’s design,
            ensuring that users are given clear, actionable feedback when things
            go wrong. I created a custom error hierarchy with classes like
            IllegalCharError, ExpectedCharError, InvalidSyntaxError, and RTError
            to handle different types of failures.
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Key Decisions:
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                <b>Tracebacks: </b> Using methods like generate_traceback() and
                string_with_arrows(), the interpreter provides detailed error
                messages that include the line and column where the error
                occurred, along with a visual representation of the problematic
                line. This makes debugging significantly easier for users.
              </li>
              <li className="">
                <b>Runtime Errors:</b> At runtime, the interpreter raises
                RTError for issues like dividing by zero, accessing undefined
                variables, or attempting invalid operations on incompatible data
                types. This ensures that users are alerted immediately when
                their code produces an error during execution.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px]">
            Built-In Functions: Extending the Language
          </div>
          <div className="block raleway text-justify mt-[20px]">
            To make the language more practical, I included a set of built-in
            functions that users can leverage. These include utility functions
            like print(), input(), and clear(), as well as type-checking
            functions like is_number() and is_string().
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Key Decisions:
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                <b>BaseFunction Class: </b> I created a BaseFunction class that
                serves as the parent for both user-defined and built-in
                functions. This class manages function execution contexts and
                argument validation.
              </li>
              <li className="">
                <b>Built-In Functions:</b> The BuiltInFunction class is
                responsible for implementing common functions, ensuring that
                they can be used directly within the language without needing to
                define them by hand. This allows for greater expressiveness and
                ease of use in the language.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="block uppercase italiana-bold text-[30px] md:text-[40px] md:mt-[50px] mt-[30px]">
              The Interpreter App
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-5 w-full raleway mt-[20px]">
          <div className="block w-[100%] md:w-[50%] text-justify ">
              This project is a full-stack application combining a FastAPI-based
              backend and a React-based frontend to create a seamless code
              execution platform. The application enables users to submit and
              execute code dynamically, either through file uploads or by typing
              snippets directly into a text area. Designed for both efficiency
              and user-friendliness, the backend leverages FastAPI’s
              high-performance asynchronous capabilities, while the frontend
              provides a sleek, intuitive interface for interaction. This
              integrated system is ideal for real-time experimentation and
              testing of code, fostering an engaging and productive environment
              for users.
            </div>
            <div className="block w-[100%] md:w-[50%] flex justify-center items-center ">
              <img
                className="w-[100%] md:w-[100%] h-[300px] "
                src="src\assets\interpreter\mockup_lap.png"
              />
            </div>
           
          </div>
          <div className="block raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px]">
            Key Features
          </div>

          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Code Execution from File Upload
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                A dedicated endpoint in the FastAPI backend accepts POST
                requests with a file upload containing code.
              </li>
              <li className="">
                Processes the uploaded file, executes the code, and returns the
                output or detailed error feedback.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Dynamic Code Submission via Frontend
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                The React-based frontend allows users to input code snippets
                directly into a text area.
              </li>
              <li className="">
                Facilitates real-time communication with the backend, displaying
                execution results instantly.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Welcome Endpoint
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                A simple GET endpoint in the backend ensures that the
                application is running and accessible.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            CORS Middleware for Seamless Integration
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                The FastAPI backend includes CORS middleware to enable secure
                and smooth interaction with the frontend.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            User-Friendly Interface
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                The React frontend offers an intuitive and elegant design,
                ensuring an optimal user experience for code submission and
                result viewing.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Scalable and Efficient Architecture
          </div>
          <div className="raleway text-justify">
            <ul className=" block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                By combining FastAPI’s asynchronous capabilities with React’s
                dynamic UI features, the application achieves a balance between
                performance and scalability, making it suitable for various
                development and educational purposes.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="block uppercase italiana-bold text-[30px] md:text-[40px] md:mt-[50px] mt-[30px]">
              Future Enhancements and Scalability
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-5 w-full raleway mt-[20px]">
            <div className="block w-[100%] md:w-[100%] text-justify ">
              The design of this interpreter is intentionally modular, allowing
              for easy extension and improvement. In the future, I plan to:
            </div>
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Add support for more complex data structures, like dictionaries
                and sets.
              </li>
              <li className="">
                Enhance error handling with more specific cases for different
                types of runtime issues.
              </li>
              <li className="">
                Implement more advanced language features, such as first-class
                functions, closures, and advanced control flow mechanisms.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Interpreter;
