FROM mcr.microsoft.com/dotnet/runtime:6.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["console-app-input/console-app-input.csproj", "console-app-input/"]
RUN dotnet restore "console-app-input/console-app-input.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "console-app-input/console-app-input.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "console-app-input/console-app-input.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "console-app-input.dll"]
